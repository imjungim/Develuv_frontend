import React from 'react'

export default function EventInfoMain(){
    const post = ` 다들 Vim을 접하고 사용하게된 계기는 다르겠지만, 아직까지 사용하고 더 잘 쓰고 싶은
    사람들이 모여 Vim에 대해 이야기해보면 좋겠다는 생각에 자리를 마련했습니다.






    전반부는 참가하는 모든 분들이 짧게라도 어떻게 Vim을 접해서 시작했고, 
    어떻게 써왔으며, 어떤 것을 더 잘하고 싶은 지 발표하고, 후반부는 삼삼오오 
    모여 서로의 설정을 구경하고 의견을 교환하는 시간으로 이뤄질 것으로 예상합니다. 
    별도로 발표 자료를 만들지 않고 Vim을 열고 직접 편집하며 편하게 얘기해도 무방합니다.
    티켓을 구입하고 참가한 모든 분께 VIMRC 2022 기념 타월을 드립니다. (디자인은 변경될 수 있습니다)
    
    `
    return(
        <div className= "main">
            <div className = "post">
            {post}
            </div>
            <div className = "ticket">
                <div>티켓</div>
                <div className='ticketPost'>티켓 내용</div>
            </div>
        </div>
    )
}