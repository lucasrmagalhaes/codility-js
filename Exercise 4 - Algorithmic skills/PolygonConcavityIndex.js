function solution(A) {
    const normIndex = i => (A.length  + i % A.length) % A.length
    const a = i => A[normIndex(i)]

    const turnDir = i => sinSign({x: a(i).x   - a(i-1).x, y: a(i).y   - a(i-1).y},
                                 {x: a(i+1).x - a(i).x,   y: a(i+1).y - a(i).y})
    const nextTurn = i => {
        return turnDir(i) == 0 ? nextTurn(i+1) :i 
    }

    const nextOppositeTurn = (i, dir, remain ) => {
        if(remain==0) return -1
        const nt = nextTurn(i+1)
        const ntDir = turnDir(nt)
        if(ntDir * dir < 0 ) return nt
        else return nextOppositeTurn(nt, dir, remain-1)   
    }

    let left = 0
    for(let i = 0; i < A.length ; i++ ){
        if( a(left).x > a(i).x ) left = i 
    }

    const res = nextOppositeTurn(nextTurn(left), turnDir(nextTurn(left)), A.length * 2 )
    return res<0 ? -1 : normIndex(res)
}

function sinSign(inVector,outVector) {
    return dotProd(inVector,{x: -outVector.y, y: outVector.x})      
}

function dotProd(a,b) {
    return a.x*b.x + a.y*b.y
}