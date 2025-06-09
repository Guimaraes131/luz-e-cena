import styles from './Banner.module.css'

interface BannerProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Banner = ({src, alt}: BannerProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={styles.banner}
    />
  );
}

export default Banner