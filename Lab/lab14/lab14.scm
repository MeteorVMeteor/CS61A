(define (split-at lst n) 
    (define (f one lst1 cnt)
        (cond
        ((null? lst1) (cons one nil))
        ((= cnt 0) (cons one lst1))
        (else
            (f (append one (list (car lst1))) (cdr lst1) (- cnt 1))
            )
        )
    )
    (f '() lst n)
)

(define (compose-all funcs) 
    (define (f func arg)
        (cond
            ((null? func) arg)
            (else
                (f (cdr func) ((car func) arg)) 
            )
        )
    )
    (lambda (a x) (f funcs x))
)
