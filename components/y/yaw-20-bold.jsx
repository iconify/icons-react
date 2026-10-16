import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9orh09dv.css';
import '../../css/a/adqobuhpk.css';
import '../../css/g/g9ki1ac-n.css';
import '../../css/f/fzk7drbpx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9orh09dv"/><path class="adqobuhpk"/><path class="g9ki1ac-n"/><path class="fzk7drbpx"/>`,
		"fallback": "energy-icons:yaw-20-bold",
	});
}

export default Component;
