import {Fragment,useState,useEffect} from "react";
import axios from "axios";
// useContext
/*
   export const FETCH_CATEGORY='FETCH_CATEGORY'
export const FETCH_CATE_LIST='FETCH_CATE_LIST'
export const FETCH_CATE_INFO='FETCH_CATE_INFO'
export const FETCH_FOOD_DETAIL='FETCH_FOOD_DETAIL'
export const FETCH_FOOD_LOCATION='FETCH_FOOD_LOCATION'
export const FETCH_NEWS='FETCH_NEWS'
export const FETCH_PAGE='FETCH_PAGE'
export const FETCH_COUNT='FETCH_COUNT'
export const fetchCategoryFoodList=(cno)=>dispatch=>{
    axios.get("http://localhost/food/food_list_react",{
        params:{
            cno:cno
        }
    }).then((response)=>dispatch({
        type:FETCH_CATE_LIST,
        payload:response.data
    }))
}

 */
function Home(){
    const [recipeList,setRecipeList]=useState([])
    useEffect(() => {
        axios.get("http://localhost/").then(response=>{
            setRecipeList(response.data)
        })
    }, []);
    let html=recipeList.map((m)=>
        <li>
            <figure><img className="radius-10 btmspace-10" src={m.poster} alt=""/>
                <figcaption><a href="#">{m.title}</a></figcaption>
            </figure>
        </li>
    )
    return (
        <Fragment>
            <div className="wrapper row3">
                <div id="slider" className="clear">
                <div className="flexslider basicslider">
                    <ul className="slides">
                        <li><a href="#"><img className="radius-10" src="../images/demo/slides/back1.jpg" style={{"width":"978px","height":"400px"}}/></a></li>
                        <li><a href="#"><img className="radius-10" src="../images/demo/slides/back2.jpg" style={{"width":"978px","height":"400px"}}/></a></li>
                        <li><a href="#"><img className="radius-10" src="../images/demo/slides/back3.jpg" style={{"width":"978px","height":"400px"}}/></a></li>
                    </ul>
                </div>
            </div>
        </div>
      <div className="wrapper row3">
        <main className="container clear">
            <h2 className="sectiontitle">인기 레시피</h2>
            <div className="flexslider carousel basiccarousel btmspace-80">
                <ul className="slides">
                    {html}
                </ul>
            </div>
            <h2 className="sectiontitle">최근 방문 레시피</h2>
            <div className="inline">
                <a href="">
                    <img src="" style={{
                        "width":"100px",
                        "height": "100px",
                        "marginLeft": "3px"
                    }}/>
                </a>
            </div>
            <div className="clear"></div>
        </main>
    </div>
        </Fragment>
    )
}
export default Home