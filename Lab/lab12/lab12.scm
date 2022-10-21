(define (tail-replicate x n) 
    (define (f lst cnt)
    (if (= cnt n) lst
        (f (cons x lst) (+ cnt 1))
    )
)
(f '() 0)
)

(define-macro (def func args body)
  `(define ,func (lambda ,args ,body))
  
)

(define (repeatedly-cube n x)
  (if (zero? n)
      x
      (let ((y (repeatedly-cube (- n 1) x)))
        (* y y y))))
