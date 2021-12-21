import re

def SIMULA_inserisci_offerte():
    return [
        ['a@a.com', 1], ['b@b.com', 3.3], ['c@c.com', 4.1], ['d@d.com', 3.8], ['e@e.com', 12]
    ]

def trova_email(email, lista_offerte):
    trovato = False

    for offerta in lista_offerte:
        if offerta[0] == email:
            trovato = True
            break

    return trovato

def media_offerte(lista_offerte):
    somma = 0.0
    for offerta in lista_offerte:
        somma += offerta[1]

    return somma / len(lista_offerte)

# si assume che la lista non sia vuota
def minimo(lista_offerte):
    min = lista_offerte[0][1]

    for offerta in lista_offerte[1:]:
        if offerta[1] < min:
            min = offerta[1]

    return min

# invece del solo valore minimo restituisce
# l`intera offerta [email, valore_offerta]
def offerta_minima(lista_offerte):
    min = lista_offerte[0]

    for offerta in lista_offerte[1:]:
        if offerta[1] < min[1]:
            min = offerta
    #ritorna la coppia <email, valore_offerta> corrispondente al minimo di "valore_offerta"
    return min


# si assume che la lista non sia vuota
def massimo(lista_offerte):
    max = lista_offerte[0][1]
    for offerta in lista_offerte[1:]:
        if offerta[1] > max:
            max = offerta[1]

    return max


# invece del solo valore massimo restituisce
# l`intera offerta [email, valore_offerta]
def offerta_massima(lista_offerte):
    max = lista_offerte[0]

    for offerta in lista_offerte[1:]:
        if offerta[1] > max[1]:
            max = offerta

    return max


def stampa_lista(lista_offerte):
    for offerta in lista_offerte:
        print(f"Email Offerente: {offerta[0]} - Offerta: {offerta[1]} ")


def inserisci_offerte():
    lista = []
    altre_offerte = True

    while altre_offerte:
        offerta = input("Inserisci l`offerta pervenuta (0 per terminare): ")

        try:
            offerta = float(offerta)
        except ValueError:
            print("Formato non valido, riprova ...")
            continue

        if offerta == 0:
            altre_offerte = False  # USCITA DAL CICLO
            continue

        if offerta < 0:
            print("Non possono essere fatte offerte negative!")
            continue

        email = input("Inserire l`email dell`offerente: ")

        if not re.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$", email):
            print("Email non valida, riprova ...")
            continue

        nuova_offerta = [email, offerta]

        if trova_email(email, lista):
            print("Questo utente ha già fatto la sua unica offerta ... respinto!")
            continue
        else:
            lista.append(nuova_offerta)

    return lista

print ("""
Il seguente script vuole simulare l\'andamento di un\'asta online con la seguente regola:
<< L\'asta verrà aggiudicata da chi avrà fatto un'offerta la più vicina alla media delle offerte degli altri.>>
L'utente dovrà inserire un'offerta in bit coin e una email che rappresenterà l'identificativo""")

print("-"*40)

# grazie all`uso di funzioni la complessità del programma principale
# è drasticamente ridotta
print("\nStampo una lista di offerte predefinite, evito l'input da tastiera")
offerte = SIMULA_inserisci_offerte()
stampa_lista(offerte)

print("-"*40)

# eliminiamo l`offerta minima e massima
print("\nElimino l'offerta più alta e l'offerta più bassa")
offerte.remove(offerta_minima(offerte))
offerte.remove(offerta_massima(offerte))
stampa_lista(offerte)

print("-"*40)

# costruiamo una nuova lista con gli elementi rimasti
# che non si discostano più del 10% dalla media dei rimasti
offerta_media = media_offerte(offerte)
print(f"Media: {offerta_media}")

tolleranza = offerta_media/100*10
print(f"Tolleranza 10%: {tolleranza}")

print("-"*40)


offerte_filtrate = [x for x in offerte if abs(x[1]-offerta_media) < tolleranza]
print("\nOfferte filtrate in base alla tolleranza..")
stampa_lista(offerte_filtrate)