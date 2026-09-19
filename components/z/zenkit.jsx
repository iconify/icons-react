import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.iw2vl3z_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5L17.632 24L24 43.5L30.368 24ZM9 24h30");
}

.y6zfn5srp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5L9 24l15 19.5L39 24z");
}
</style><path class="y6zfn5srp"/><path class="iw2vl3z_p"/>`,
		"fallback": "arcticons:zenkit",
	});
}

export default Component;
