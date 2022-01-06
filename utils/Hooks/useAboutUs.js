import { data } from "autoprefixer";
import Card from './../../components/Ui/Card/Card';

const useAboutUs = (props) => {
    let render
    if(props.data){
        if(props.data.length>0){
            render = (
                <Card>دیتای مورد نظر شما...</Card>
            )
        }else if(props.data.length===0){
            render = (
                <Card className="bg-white shadow-lg">چیزی یافت نشد</Card>
            )

    }
    }else{
        render=props.func()
    }
    return {render}
}

export default useAboutUs;
