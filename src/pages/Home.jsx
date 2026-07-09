import { useState, useEffect } from 'react';
import HeroCarousel from '../components/HeroCarousel';
import SneakerList from '../components/SneakerList';
import Features from '../components/Features';

export default function Home({ onAgregar }) {
  const [allZapatillas, setAllZapatillas] = useState([]);
  const [page, setPage] = useState(1);
  const zapatillasPorPagina = 10;
  
  const [loading, setLoading] = useState(true);

  // aca hacemos el llamado asincrono a la API EXTERNA DE VERDAD (Platzi Fake Store API)
  const fetchSneakers = async () => {
    try {
      setLoading(true);
      // Aca le pedi a la IA que me explicara como hacer el fetch. Consume datos desde APIs reales
      // y la IA tambien me sugirio ponerle cabeceras (headers) de seguridad para evitar bloqueos
      const response = await fetch('https://api.escuelajs.co/api/v1/products/?categoryId=4', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      
      // Aca le pedi a la IA que me ayudara a crear un filtro de seguridad para que 
      // la aplicacion no muestre data basura o test de otros usuarios y se vea profesional
      let cleanSneakers = data.filter(shoe => 
        shoe.images.length > 0 && 
        !shoe.title.toLowerCase().includes('test') &&
        !shoe.title.toLowerCase().includes('neuron') // evita items corruptos
      );
      
      // Mapeo para arreglar la data y poner los precios chilenos
      cleanSneakers = cleanSneakers.map(shoe => {
        // Obtengo la url limpia de la foto (a veces la api envia arrays corruptos con corchetes en el string)
        let imgUrl = shoe.images[0] || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff';
        if (imgUrl.startsWith('["')) {
          try { imgUrl = JSON.parse(imgUrl)[0] || imgUrl; } catch(e){}
        }

        return {
          id: shoe.id,
          title: shoe.title.replace('Shoes', 'Zapatillas'),
          description: `Servicio especializado de lavado ecológico para tu modelo. ${shoe.description}`,
          price: [4990, 5990, 6990, 7990, 8990][shoe.id % 5], // forzamos precios exactos estilo -$990
          thumbnail: imgUrl,
          brand: 'Exclusiva'
        };
      });

      setAllZapatillas(cleanSneakers);
    } catch (error) {
      console.error('Error al traer zapatillas de la API publica', error);
      alert("Hubo un error cargando el catálogo de zapatillas desde la web.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSneakers();
  }, []);

  // Aca use la IA para que me ayudara a armar toda esta logica matematica de 
  // Paginacion local, asi la carga no se demora y se muestran de a racimos
  const indexUltima = page * zapatillasPorPagina;
  const indexPrimera = indexUltima - zapatillasPorPagina;
  const zapatillasPaginadas = allZapatillas.slice(indexPrimera, indexUltima);
  const totalPages = Math.ceil(allZapatillas.length / zapatillasPorPagina);

  return (
    <>
      <HeroCarousel zapatillas={allZapatillas.slice(0, 5)} />
      <Features />
      <SneakerList 
        zapatillas={zapatillasPaginadas} 
        onAgregar={onAgregar} 
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </>
  );
}
