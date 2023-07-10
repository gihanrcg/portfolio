/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';

import styles from './Gallery.module.scss';
import { Card } from '@mui/material';

export default function PhotoGallery() {
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   fetch('/api/photos')
  //     .then((response) => response.json())
  //     .then((data) =>
  //       setImages(
  //         data.map((img) => ({
  //           src: img.src,
  //           // w: img.width,
  //           // h: img.height,
  //           title: 'Image',
  //         }))
  //       )
  //     );
  // }, []);

  const importAll = (r) => {
    return r
      .keys()
      .map((fileName) => {
        const file = fileName.replace('./', ''); // remove './' at the start of filename

        return {
          src: `/images/events/${file}`,
          thumbnail: `/images/events/${file}`,
        };
      })
      .filter((image) => !image.src.includes('src'));
  };

  const images = importAll(
    require.context('../../images/events', false, /\.(png|jpe?g|svg)$/)
  );

  console.log(images);
  return (
    <div className={styles['card-container']}>
      <Card variant="outlined">
        <div className={styles['about-container']}>
          <h3 className={styles['about-container-title']}>Gallery</h3>
          <Gallery>
            <div className={styles['image-grid']}>
              {images.map((item, index) => (
                <Item
                  original={item.src}
                  thumbnail={item.src}
                  // width={item.w.toString()}
                  // height={item.h.toString()}
                  title={item.title}
                  alt={item.title}
                  key={index}
                >
                  {({ ref, open }) => (
                    <img
                      src={item.src}
                      ref={ref}
                      onClick={open}
                      alt={item.title}
                    />
                  )}
                </Item>
              ))}
            </div>
          </Gallery>
        </div>
      </Card>
    </div>
  );
}
