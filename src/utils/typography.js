import Typography from "typography"
import twinPeaks from "typography-theme-twin-peaks"

const typography = new Typography(twinPeaks)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography