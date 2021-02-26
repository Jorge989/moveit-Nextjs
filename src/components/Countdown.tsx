import { useContext, useEffect, useState } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.css'

export function CountDown() {

	const { 
		minutes, 
		seconds, 
		hasFinished,
		isActive,
		startcountdown, 
		resetCountdown
	 } = useContext(CountdownContext)

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

	return (
		<div>
			<div className={styles.countdownContainer}>
				<div>
					<span>{minuteLeft}</span>
					<span>{minuteRight}</span>
				</div>

				<span>:</span>

				<div>
					<span>{secondLeft}</span>
					<span>{secondRight}</span>
				</div>
			</div>

			{ hasFinished ? (
				<button
					disabled
					className={styles.countDownButton}>
					Ciclo encerrado
				</button>
			) :
				(
					isActive ? (
						<button
							onClick={resetCountdown}
							type="button"
							className={`${styles.countDownButton} ${styles.countDownButtonActive}`}>
							Abandonar ciclo
						</button>
					) : (
							<button
								onClick={	startcountdown}
								type="button"
								className={styles.countDownButton}>
								Iniciar ciclo
							</button>
						)
				)}
		</div>
	)
}