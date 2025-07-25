import { pageLinks } from "../data";

const PageLinks = ({parentClass, itemClass}) => {
  return (
      <ul className={parentClass} id={parentClass}>
               {
                   pageLinks.map((link) =>{
                   return (
                   <li key={link.id}>
                   <a  rel='noreferrer' href={link.href} className={itemClass}>{link.text}</a>
                   </li>
                   )
                   })
               }
           </ul>
  )
}
export default PageLinks