// src/infrastructure/ui/components/UnitList.tsx
import React, { useState } from 'react';

import styles from './UnitList.module.scss';
import UnitCard from '../UnitCard/UnitCard';

interface Unit {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  prevVideoUrl: string;
  nextVideoUrl: string;
}

const unitsData: Unit[] = [
  {
    id: 1,
    title: 'Introducción al modelo de agencia',
    description: `El modelo de agencia es una estrategia empresarial clave para construir y
escalar negocios. En este curso, exploraremos los conceptos fundamentales y
Introducción al modelo de
agencia
las mejores prácticas relacionadas con este modelo, así como las estrategias
que pueden ayudarte a alcanzar el éxito en tu agencia.
A lo largo del curso, profundizaremos en cómo el modelo de agencia puede ser
aplicado en diferentes sectores y disciplinas, como el marketing, la publicidad,
el diseño gráfico, el desarrollo web, entre otros. También analizaremos los roles
y responsabilidades típicos dentro de una agencia, y destacaremos las
habilidades y competencias necesarias para liderar y gestionar una agencia
exitosa.
Además, exploraremos las estrategias clave para construir una sólida base de
clientes, incluyendo la creación de una propuesta de valor única, la
identificación y segmentación del mercado objetivo, y la construcción de
relaciones sólidas con los clientes. También te mostraremos cómo establecer
una estructura de precios rentable y cómo gestionar eficazmente los recursos
y el talento humano en tu agencia.
En el mundo digital actual, las agencias se enfrentan a desafíos y
oportunidades únicas. Discutiremos las mejores prácticas para adaptarse a los
cambios tecnológicos y las demandas del mercado, incluyendo la adopción de
nuevas herramientas y tecnologías, la maximización de la eficiencia operativa y
la gestión del crecimiento a largo plazo.
A lo largo de este curso, podrás aprender de ejemplos reales de éxito en el
mundo de las agencias, así como de casos de estudio que ilustrarán los
desafíos y las soluciones en el mundo real. También tendrás oportunidades
prácticas para aplicar los conceptos y las estrategias aprendidas en ejercicios
y actividades.
Al finalizar este curso, estarás equipado con los conocimientos y las
habilidades necesarias para construir y escalar tu propio negocio utilizando el
modelo de agencia. Estarás preparado para enfrentar los desafíos del mercado
y aprovechar las oportunidades para el crecimiento y el éxito de tu agencia.`,
    imageUrl: 'url-de-imagen',
    prevVideoUrl: 'url-de-video',
    nextVideoUrl: 'url-de-video'
  },
  {
    id: 2,
    title: `Estrategias para la
construcción de un modelo
de agencia sólido`,
    description: `En el mundo empresarial, la construcción de un modelo de agencia sólido es
esencial para el éxito y el crecimiento sostenible de cualquier negocio. Un
modelo de agencia bien definido y estructurado proporciona una base sólida
para la gestión de las operaciones, la generación de ingresos y el logro de los
objetivos empresariales a largo plazo. En este tema, exploraremos diversas
Estrategiaspara la
construcción de un modelo
de agencia sólido
estrategias clave que pueden ayudarte a construir y fortalecer tu modelo de
agencia.
1. Identificar tu Propuesta de ValorÚnica
Una de las primeras estrategias para construir un modelo de agencia sólido es
identificar tu Propuesta de Valor Única (PVU). La PVU es lo que diferencia tu
agencia de la competencia y el valor añadido que aportas a tus clientes.
Pregúntate qué necesidades específicas de los clientes puedes satisfacer
mejor que nadie, qué problemas puedes resolver de manera única y qué
beneficios puedes ofrecer. Al identificar tu PVU, podrás desarrollar una
estrategia de posicionamiento y marketing efectiva para atraer a clientes
ideales y diferenciarte en el mercado.
2. Establecer Metas Claras y Medibles
Otra estrategia clave es establecer metas claras y medibles para tu modelo de
agencia. Define objetivos a corto, mediano y largo plazo que sean específicos,
alcanzables, relevantes y temporales (SMART, por sus siglas en inglés). Estas
metas te ayudarán a mantener el enfoque, medir el progreso y tomar
decisiones basadas en datos. Además, asegúrate de involucrar a todo el
equipo en el establecimiento de metas y comunicarlas de manera efectiva para
motivar el compromiso y la colaboración.
3. Construir un Equipo Competente y
Apasionado
El éxito de tu agencia dependerá en gran medida del talento y la pasión de tu
equipo. Por lo tanto, una estrategia importante es construir un equipo
competente y apasionado. Selecciona cuidadosamente a las personas que se
unirán a tu agencia, teniendo en cuenta tanto sus habilidades técnicas como
su encaje cultural. Fomenta un ambiente de trabajo positivo y estimulante,
promoviendo la formación y el desarrollo continuo. Al tener un equipo
comprometido y motivado, podrás ofrecer un servicio excepcional a tus
clientes y mantener una reputación sólida en la industria.
4. Establecer un Proceso de Gestión de
Proyectos Efectivo
La gestión de proyectos es fundamental para la eficiencia y éxito de cualquier
agencia. Establecer un proceso de gestión de proyectos efectivo te permitirá
planificar, organizar, ejecutar y controlar las actividades de manera eficiente.
Define un flujo de trabajo claro desde la recepción de un proyecto hasta su
entrega, asignando responsabilidades y estableciendo plazos realistas. Utilizar
herramientas y software de gestión de proyectos también puede ser de gran
ayuda para mantener un seguimiento adecuado de las tareas y mantener la
comunicación fluida con los clientes.
5. Fomentar una Cultura de Innovación y
Aprendizaje
Para construir un modelo de agencia sólido, es importante fomentar una
cultura de innovación y aprendizaje continuo. Anima a tu equipo a proponer
nuevas ideas, experimentar con nuevas tecnologías y enfoques, y aprender de
los éxitos y fracasos. Establece canales de comunicación abiertos y promueve
la colaboración entre los miembros del equipo para intercambiar conocimientos
y experiencias. Al fomentar una cultura de innovación y aprendizaje, podrás
adaptarte rápidamente a los cambios del mercado y ofrecer soluciones
actualizadas y de vanguardia a tus clientes.
6. Establecer alianzas estratégicas
Por último, una estrategia efectiva para construir un modelo de agencia sólido
es establecer alianzas estratégicas con otras empresas complementarias.
Identifica socios potenciales que puedan agregar valor a tus servicios o
ayudarte a ampliar tu base de clientes. Estas alianzas pueden ser de
colaboración o de promoción mutua, permitiéndote llegar a nuevos mercados y
generar nuevas oportunidades de negocio. Trabaja en conjunto con estos
socios para maximizar los beneficios y generar sinergias que impulsen el
crecimiento y la consolidación de tu modelo de agencia.
En resumen, la construcción de un modelo de agencia sólido implica identificar
tu Propuesta de Valor Única, establecer metas claras y medibles, construir un
equipo competente y apasionado, establecer un proceso de gestión de
proyectos efectivo, fomentar una cultura de innovación y aprendizaje, y
establecer alianzas estratégicas. Estas estrategias clave te brindarán los
cimientos sólidos necesarios para construir y escalar tu negocio de agencia
con éxito.`,
    imageUrl: 'url-de-imagen',
    prevVideoUrl: 'url-de-video',
    nextVideoUrl: 'url-de-video'
  },
  {
    id: 3,
    title: `Estrategias para escalar un negocio de agencia`,
    description: `Introducción
A medida que tu agencia crece, es vital contar con estrategias efectivas para
escalar el negocio exitosamente. Escalar un negocio de agencia implica ampliar
su alcance, aumentar el número de clientes, mejorar la eficiencia operativa y
Estrategiaspara escalar un
negocio de agencia
lograr un crecimiento sostenible a largo plazo. En esta sección, exploraremos
diferentes estrategias clave que te ayudarán a escalar tu negocio de agencia.
1. Especialización en un nicho
Uno de los primeros pasos para escalar un negocio de agencia es enfocarse en
la especialización en un nicho específico. En lugar de tratar de atender a todos
los clientes posibles, elige un área de especialización donde tu agencia pueda
destacar y ofrecer un valor único. Al especializarte, podrás desarrollar
conocimientos especializados, crear una reputación sólida y atraer a clientes
que buscan servicios específicos en ese nicho.
2. Construir y mantener una marca sólida
Una estrategia fundamental para escalar tu negocio de agencia es construir y
mantener una marca sólida. Una marca fuerte te ayudará a diferenciarte de la
competencia y atraer a clientes potenciales. Define una propuesta de valor
única, crea un logotipo y una identidad visual efectiva, y comunica de manera
consistente los valores y beneficios de tu agencia en todos tus canales de
marketing y comunicación.
3.Desarrollar relaciones y alianzas estratégicas
Para escalar tu negocio de agencia, es esencial establecer relaciones y
alianzas estratégicas con otras empresas y profesionales. Estas asociaciones
pueden abrir nuevas oportunidades de negocio, permitir el acceso a nuevos
clientes y proporcionar recursos adicionales. Identifica empresas y
profesionales con los que puedas colaborar y desarrolla relaciones
mutuamente beneficiosas a largo plazo.
4.Automatización y eficiencia operativa
La automatización y la búsqueda de eficiencia operativa son estrategias clave
para escalar un negocio de agencia. Utiliza herramientas y tecnologías que te
permitan automatizar procesos repetitivos y optimizar la gestión de tareas.
Automatizar tareas como el seguimiento de clientes, la facturación y el análisis
de datos te permitirá ahorrar tiempo y recursos, y te ayudará a escalar de
manera más efectiva.
5. Inversión en marketing y publicidad
Para escalar tu negocio de agencia, debes invertir en marketing y publicidad.
Crea una estrategia de marketing sólida que incluya tácticas de promoción en
línea y fuera de línea. Utiliza herramientas de marketing digital como el
marketing por correo electrónico, las redes sociales y el SEO para generar
leads y atraer a nuevos clientes. Apóyate también en la publicidad tradicional,
como anuncios en medios impresos o televisión, cuando sea adecuado para tu
nicho y público objetivo.
6.Desarrollar un equipo competente
Escalar un negocio de agencia requiere contar con un equipo competente y
comprometido. A medida que tu agencia crece, es importante contratar a
profesionales con habilidades complementarias y experiencia en el nicho
específico de tu agencia. Brinda oportunidades de capacitación y desarrollo
profesional para fomentar el crecimiento del equipo. Un equipo fuerte te
permitirá asumir más proyectos y atender las necesidades crecientes de tus
clientes.`,
    imageUrl: 'url-de-imagen',
    prevVideoUrl: 'url-de-video',
    nextVideoUrl: 'url-de-video'
  },
  {
    id: 4,
    title: `Ejercicios Prácticos`,
    description: `En esta lección, pondremos la teoría en práctica a través de actividades
prácticas. Haga clic en los elementos a continuación para verificar cada
ejercicio y desarrollar habilidades prácticas que lo ayudarán a tener éxito en el
tema.
Ejercicios Prácticos
Pongamos en práctica tus conocimientos
Definición de los conceptos clave
Investiga y define los conceptos clave del modelo de agencia, como
qué es una agencia, cuál es su función principal y qué beneficios
ofrece a los clientes.
Análisis de mercado y competencia
Realiza un análisis de mercado y competencia para identificar
oportunidades y desafíos en la construcción de un modelo de agencia
sólido. Presenta los resultados de tu análisis y propón estrategias para
enfrentar los desafíos identificados.
Desarrollo de un plan de crecimiento
Elabora un plan de crecimiento para escalar un negocio de agencia.
Incluye estrategias para aumentar la cartera de clientes, optimizar los
procesos internos y mejorar la rentabilidad. Presenta tu plan de
crecimiento de manera clara y organizada.`,
    imageUrl: 'url-de-imagen',
    prevVideoUrl: 'url-de-video',
    nextVideoUrl: 'url-de-video'
  },
  {
    id: 5,
    title: `Resumen`,
    description: `En esta lección, pondremos la teoría en práctica a través de actividades
prácticas. Haga clic en los elementos a continuación para verificar cada
ejercicio y desarrollar habilidades prácticas que lo ayudarán a tener éxito en el
tema.
EjerciciosPracticos
Pongamos en práctica tus conocimientos
Definición de los conceptos clave
Investiga y define los conceptos clave del modelo de agencia, como
qué es una agencia, cuál es su función principal y qué beneficios
ofrece a los clientes.
Análisis de mercado y competencia
Realiza un análisis de mercado y competencia para identificar
oportunidades y desafíos en la construcción de un modelo de agencia
sólido. Presenta los resultados de tu análisis y propón estrategias para
enfrentar los desafíos identificados.
Desarrollo de un plan de crecimiento
Elabora un plan de crecimiento para escalar un negocio de agencia.
Incluye estrategias para aumentar la cartera de clientes, optimizar los
procesos internos y mejorar la rentabilidad. Presenta tu plan de
crecimiento de manera clara y organizada.`,
    imageUrl: 'url-de-imagen',
    prevVideoUrl: 'url-de-video',
    nextVideoUrl: 'url-de-video'
  }
];

const UnitList: React.FC = () => {
  const [selectedUnitId, setSelectedUnitId] = useState<number | null>(null);

  const handleUnitClick = (id: number) => {
    setSelectedUnitId(id === selectedUnitId ? null : id);
    setSelectedUnitId(id === selectedUnitId ? null : id);
    setSelectedUnitId(id === selectedUnitId ? null : id);
  };


  return (
    <div className={styles.unitList}>
      {unitsData.map((unit) => (
        <div key={unit.id} onClick={() => handleUnitClick(unit.id)}>
          <UnitCard
            title={unit.title}
            description={unit.description}
            imageUrl={unit.imageUrl}
            isSelected={unit.id === selectedUnitId}
            prevVideoUrl={unit.id === selectedUnitId ? unit.prevVideoUrl : undefined}
            nextVideoUrl={unit.id === selectedUnitId ? unit.nextVideoUrl : undefined}
          />
        </div>
      ))}
    </div>
  );
};

export default UnitList;
