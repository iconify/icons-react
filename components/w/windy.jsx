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
		"content": `<style>.ni5hshxsz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.47 6c-.63 12.26-2 36.06 8 36.06s17-26.43 18-30.33");
}

.z7leqybgy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 6c.57 12.24 3.27 36 13.3 36s19-21.41 20.55-30.33");
}
</style><path class="ni5hshxsz"/><path class="z7leqybgy"/>`,
		"fallback": "arcticons:windy",
	});
}

export default Component;
