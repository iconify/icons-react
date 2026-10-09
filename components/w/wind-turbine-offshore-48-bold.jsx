import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iarxbnbft.css';
import '../../css/j/j5yt-usot.css';
import '../../css/u/uhxar85hb.css';
import '../../css/i/iqzxp16gl.css';
import '../../css/h/hqm7cs9hy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iarxbnbft"/><path class="j5yt-usot"/><path class="uhxar85hb"/><path class="iqzxp16gl"/><path class="hqm7cs9hy"/>`,
		"fallback": "energy-icons:wind-turbine-offshore-48-bold",
	});
}

export default Component;
