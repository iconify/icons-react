import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ugqsrvbzx {
  fill: currentColor;
  d: path("M15.96 11.232q-.23-.23-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23t-.54-.23M14 8.819l-.588-.627q.667-.552 1.454-.872T16.5 7t1.634.32t1.454.872L19 8.82q-.538-.442-1.176-.688T16.5 7.884t-1.324.247T14 8.819M19.2 20q-2.702 0-5.418-1.244t-5.005-3.533q-2.27-2.289-3.523-5.021Q4 7.469 4 4.8V4h4.439l.848 4.083l-2.696 2.51q.684 1.186 1.417 2.167t1.527 1.769q.802.84 1.808 1.57t2.296 1.44l2.611-2.708l3.75.756V20z");
}
</style><path class="ugqsrvbzx"/>`,
		"fallback": "material-symbols-light:wifi-calling-2-sharp",
	});
}

export default Component;
