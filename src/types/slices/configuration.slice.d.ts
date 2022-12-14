/** Состояние слайса конфигурации приложения */
type ConfigurationSliceState = {
  invalidUserInputCount: number

  interactiveControlsValues: Record<InteractiveControls, number>
}

/**
 * Слайс, отвечающий за область конфигурации приложения
 * @interface
 */
interface ConfigurationSlice
  extends SliceCaseReducers<ConfigurationSliceState> {
  increaseInvalidUserInputCount(state: ConfigurationSliceState): void

  decreaseInvalidUserInputCount(state: ConfigurationSliceState): void

  setInteractiveControlValue(
    state: ConfigurationSliceState,
    action: PayloadAction<InteractiveControl>,
  ): void
}
