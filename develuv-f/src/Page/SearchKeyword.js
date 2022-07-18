import Events from "../Components/Explore/Events";
import EventSearch from "../Components/Explore/EventSearch";
import { useSearchParams } from "react-router-dom";


const SearchKeyword = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword')
  const type = searchParams.get('type')
  console.log('keyword :' , keyword)
  console.log('type :' , type)

  return (
    <div>
      search페이지
      <Events/>
    </div>
  )
}

export default SearchKeyword;