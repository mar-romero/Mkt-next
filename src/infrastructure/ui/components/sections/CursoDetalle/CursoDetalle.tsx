import React from 'react';
import styles from './CursoDetalle.module.scss';
import SecondSector from '../SecondSector/secondSector';

interface Modulo {
  id: number;
  titulo: string;
  contenido: string;
  conclusion: string;
}

interface CursoData {
  titulo: string;
  descripcion: string;
  modulos: Modulo[];
}

interface CursoDetalleProps {
  cursoData: CursoData;
}

const CursoDetalle: React.FC<CursoDetalleProps> = ({ cursoData }) => {
  return (
    <div className={styles.pageWrapper}>
      <SecondSector titulo={cursoData.titulo} />
      <div className={styles.descripcionWrapper}>
        <DescripcionCurso descripcion={cursoData.descripcion} />
      </div>
      <div className={styles.whiteBackground}>
        <div className={styles.cursoDetalle}>
          <ModulosCurso modulos={cursoData.modulos} />
        </div>
      </div>
    </div>
  );
};

const DescripcionCurso: React.FC<{ descripcion: string }> = ({ descripcion }) => {
  return (
    <section className={styles.descripcionCurso}>
      <h2 className={styles.descripcionHeader}>Descripción del Curso</h2>
      <p>{descripcion}</p>
    </section>
  );
};

const ModulosCurso: React.FC<{ modulos: Modulo[] }> = ({ modulos }) => {
  return (
    <section className={styles.modulosCurso}>
      <h2 className={styles.modulosHeader}>Módulos del Curso</h2>
      <div className={styles.modulosContainer}>
        {modulos.map((modulo) => (
          <div key={modulo.id} className={styles.modulo}>
            <h3 className={styles.moduloTitulo}>
              {modulo.id} - {modulo.titulo}
            </h3>
            <div className={styles.contenido}>
              {modulo.contenido.split('\n\n').map((parrafo, index) => (
                <React.Fragment key={index}>
                  {parrafo.startsWith('•') ? (
                    <ul className={styles.lista}>
                      {parrafo.split('\n').map((item, itemIndex) => (
                        <li key={itemIndex}>{item.replace('•', '').trim()}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{parrafo}</p>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className={styles.conclusion}>
              <h4>Conclusión</h4>
              <p>{modulo.conclusion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CursoDetalle;
