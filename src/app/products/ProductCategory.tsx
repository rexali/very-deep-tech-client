'use client'

import "./styles/styles.css";
export default function ProductCategories(props:any) {

  return (
    <div className="scrollmenu">
      <a href="#categories">Categories:</a>
      {/* <a href="#all">All</a> */}
      {props.categories?.map((category:string,i:number)=><a key={i} href={`/category/?term=${category}`}>{category}</a>)}
    </div>
  )
}
