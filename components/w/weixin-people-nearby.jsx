import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g54fotb1f.css';
import '../../css/t/t7q-hstoq.css';
import '../../css/y/ymiwr7boi.css';
import '../../css/y/y3sl4tari.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="g54fotb1f"><circle class="t7q-hstoq"/><circle class="ymiwr7boi"/><path class="y3sl4tari"/></g>`,
		"fallback": "icon-park-solid:weixin-people-nearby",
	});
}

export default Component;
