import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r6cnbey4s.css';
import '../../css/x/xs6jcubua.css';
import '../../css/t/tadhxrmii.css';
import '../../css/x/xb0z7dbeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r6cnbey4s"/><path class="xs6jcubua"/><circle transform="rotate(-90 18.8 14.28)" class="tadhxrmii"/><path class="xb0z7dbeo"/></g>`,
		"fallback": "andrsrxn:wifi-settings",
	});
}

export default Component;
