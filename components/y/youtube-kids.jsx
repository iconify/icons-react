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
		"content": `<style>.aw7t_dxaj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.164 18.952l2.316 10.61l9.593-6.993z");
}

.zc315jb9p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m36.527 35.361l-7.396.53l-.05.003a25.3 25.3 0 0 0-7.056 1.638l-4.759 1.794a7.506 7.506 0 0 1-9.982-5.422L4.674 21.95a7.506 7.506 0 0 1 5.733-8.934l21.325-4.655a7.506 7.506 0 0 1 8.934 5.732l2.659 12.18a7.506 7.506 0 0 1-6.798 9.087");
}
</style><path class="zc315jb9p"/><path class="aw7t_dxaj"/>`,
		"fallback": "arcticons:youtube-kids",
	});
}

export default Component;
