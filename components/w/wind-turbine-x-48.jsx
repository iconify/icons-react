import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfx2djpti.css';
import '../../css/g/g7vc6yhmk.css';
import '../../css/s/s_cb3tb5f.css';
import '../../css/f/fb4fmxhro.css';
import '../../css/u/uapm9wf8u.css';
import '../../css/c/cy16nxb9j.css';
import '../../css/t/t8dqc66mp.css';
import '../../css/v/vqbc74-cp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfx2djpti"/><path class="g7vc6yhmk"/><path class="s_cb3tb5f"/><path class="fb4fmxhro"/><path class="uapm9wf8u"/><path class="cy16nxb9j"/><path class="t8dqc66mp"/><path class="vqbc74-cp"/>`,
		"fallback": "energy-icons:wind-turbine-x-48",
	});
}

export default Component;
