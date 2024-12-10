
        const esquina1 = "╔"
        const esquina2 = "╗"
        const esquina3 = "╚"
        const esquina4 = "╝"
        const horizontal = "═"
        const vertical = "║"

        const ancho = 20;
        const alto = 6;

        // parte superior

        let superior = esquina1;
        for(let i = 0; i < ancho; i++){
                console.log(i)
                superior += horizontal
        }
        superior += esquina2
        console.log(superior)

        //parte media
        
        let mid = vertical 
        for(let i = 0; i < ancho; i++){   
                mid += " "
        }
        mid += vertical;
        for(let i = 0; i < alto; i++){   
                console.log(mid)

        }

        //parte baja

        let low = esquina3
                for(let i = 0; i < ancho; i++){
                low += horizontal
        }
        low += esquina4

        console.log(low)
        //const superior = esquina1 + horizontal + horizontal + horizontal + esquina2   

        //createLine("╔", "═", "╗", ancho, alto)
        //        ("║"," "," ","║", ancho, alto)