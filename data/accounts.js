

class account{
    constructor(id, psw){
        this.id=id;
        this.psw=psw;
        this.todo=[];
    }
}
class todoElement{
    constructor(id, title, text){
        this.id= id
        this.title =title;
        this.text=text;
    }
}

let accounts = []
let newId =0;
accounts.push(new account("admin","psw"))

export default {
    login: 
    function login(id, psw){
        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].id==id && accounts[i].psw==psw)
                return true;   
        }
        return false
    },
    registration:
    function registration(id, psw){
        try {
            if (id.length>5 && psw.length>5 ){
                accounts.push(new account(id,psw))
                return true;
            }
            else
                return false;
            
        } catch (error) {
            return false;
        }
 
    },
    addTodo:
    function addTodo(accId,title, text){
        try{
        let res=accounts.find(({id})=>id==accId)
        res.todo.push(new todoElement(newId++, title, text))
        return true;
        }catch(e){return false;}
    },
    getTodo:
    function getTodo(accId){
        let res = accounts.find(({id})=>id==accId).todo
        return res
    }

}