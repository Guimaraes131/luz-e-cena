interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Logo = ({...props}: LogoProps) => {
  return (
    <img {...props} />
  )
}

export default Logo