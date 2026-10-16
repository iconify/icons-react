import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9t5rfb5z.css';
import '../../css/q/qtmy_k8zx.css';
import '../../css/b/beziae8et.css';
import '../../css/j/jgfw_wbhi.css';
import '../../css/x/xb3brjb7i.css';
import '../../css/u/u5tmx4bng.css';
import '../../css/p/pwwabbdwa.css';
import '../../css/l/l3qindbue.css';
import '../../css/f/fdtytm4ox.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9t5rfb5z"/><path class="qtmy_k8zx"/><path class="beziae8et"/><path class="jgfw_wbhi"/><path class="xb3brjb7i"/><path class="u5tmx4bng"/><path class="pwwabbdwa"/><path class="l3qindbue"/><path class="fdtytm4ox"/>`,
		"fallback": "energy-icons:wind-farm-x-20-bold",
	});
}

export default Component;
