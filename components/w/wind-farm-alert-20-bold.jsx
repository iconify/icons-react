import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9t5rfb5z.css';
import '../../css/t/tfnkjzb8p.css';
import '../../css/b/beziae8et.css';
import '../../css/j/jgfw_wbhi.css';
import '../../css/r/rqao90b6l.css';
import '../../css/u/u5tmx4bng.css';
import '../../css/p/pwwabbdwa.css';
import '../../css/j/jeyqzjnhx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9t5rfb5z"/><path class="tfnkjzb8p"/><path class="beziae8et"/><path class="jgfw_wbhi"/><path class="rqao90b6l"/><path class="u5tmx4bng"/><path class="pwwabbdwa"/><path class="jeyqzjnhx"/>`,
		"fallback": "energy-icons:wind-farm-alert-20-bold",
	});
}

export default Component;
