/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';

import styles from './Gallery.module.scss';
import { Card } from '@mui/material';

export default function PhotoGallery() {
  const importAll = (r) => {
    return r.keys().map(r);
  };

  // const images = importAll(
  //   require.context('/public/images/events', false, /\.(png|jpe?g|svg)$/)
  // );

  const removeDuplicates = (array, key) => {
    return array.reduce((arr, item) => {
      const removed = arr.filter((i) => i[key] !== item[key]);
      return [...removed, item];
    }, []);
  };

  const images = importAll(
    require.context('../../images/events', false, /\.(png|jpe?g|svg)$/)
  ).map((img) => {
    return {
      src: img.default.src,
      thumbnail: img.default.src,
      h: img.default.height,
      w: img.default.width,
    };
  });

  const uniqueImages = removeDuplicates(images, 'src');

  return (
    <div className={styles['card-container']}>
      <Card variant="outlined">
        <div className={styles['about-container']}>
          <h3 className={styles['about-container-title']}>Gallery</h3>
          <Gallery>
            <div className={styles['image-grid']}>
              {uniqueImages.map((item, index) => (
                <Item
                  original={item.src}
                  thumbnail={item.src}
                  width={item.w.toString()}
                  height={item.h.toString()}
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
