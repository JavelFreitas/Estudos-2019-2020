#include <iostream>
using namespace std;

int soma(int a, int b){
    return a+b;

}

int main(){
    cout << "Hello\n";
    int a = 0, b = 0;
    cin >> a 
        >> b;
    if(a<0 || b<0){
        cout << "Some number is negative";
        return 1;
    }
    cout << soma(a, b);

    return 0;
}