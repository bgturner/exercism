;;; leap.el --- Leap exercise (exercism)

;;; Commentary:
; Intro to "if"s: https://www.gnu.org/software/emacs/manual/html_node/eintr/if.html#if
;
; Note: Any non-nil evaluation will be "true".
; It's common to use either `nil` or `()` for false depending on the context
;

;;; Code:
(defun leap-year-p (year)
  (cl-flet ((divisible (divisor)
		       (zerop (% year divisor))))
    (and (divisible 4)
	 (or (not (divisible 100))
	     (divisible 400)))
    ))

(provide 'leap)
;;; leap.el ends here
