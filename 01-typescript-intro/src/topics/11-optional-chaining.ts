

interface Passenger {
    name: string;
    children?: string[];
}



const passenger1: Passenger = {
    name: 'Victor',
}

const passenger2 :Passenger = {
    name: 'Anlly',
    children: ['Emily', 'Matias'],
}

const returnChildrenNumber = (passenger: Passenger ) : number =>{
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name ,howManyChildren);

    return howManyChildren;
}

returnChildrenNumber(passenger2);