package app;

public class Inimigo {
    
    private String nome;
    private String classe;
    private int vida;
    private int dano;

    public Inimigo (String nome, String classe, int vida, int dano){
        this.classe = classe;
        this.dano = dano;
        this.nome = nome;
        this.vida = vida;
    }

    public void damage(int damage){
        this.vida = this.vida - damage;
    }

    public void heal(int heal){
        this.vida = this.vida+heal;
    }

    public void setClasse(String classe) {
        this.classe = classe;
    }
    
    public void setDano(int dano) {
        this.dano = dano;
    }
    
    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public void setVida(int vida) {
        this.vida = vida;
    }

    
    public String getClasse() {
        return classe;
    }
    
    public int getDano() {
        return dano;
    }
    
    public String getNome() {
        return nome;
    }
   
    public int getVida() {
        return vida;
    }

}