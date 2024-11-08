import {Component} from "react"; //반드시 

class ClassCom extends Component{     //Componet란 클래스로부터 상속을 받겠다
    render(){     //render하위에 있는 jsx코드를 반환하겠다
        return(
            <div>
                클래스형 컴포넌트
            </div>
        )
    }
}

export default ClassCom;  //외부로 export