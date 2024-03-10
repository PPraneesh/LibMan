# Library-Management

# objectives
- Sign in / sign-up pages
- Three different dashboards
# database design
- 2 collections
  - ```
    book{
        
        }
    ```
first user unnada ledha?
users lo teachers and students


common - open for everyone
/view   --- library books 

user - student, teacher
/user/login --- login
/user/register --- register
/user/view --- books he/she taken, fines regarding them  (protected route)

admin - library manager
/admin/login --- login
/admin/view --- to see who took how many books, all fines etc, to check which books are out of stock (protected route)


