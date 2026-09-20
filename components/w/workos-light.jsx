import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixvuw7bjy.css';
import '../../css/h/hy4rqvb5m.css';
import '../../css/t/t_vp7-b6a.css';

const viewBox = {"width":55.4,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ixvuw7bjy"><path class="hy4rqvb5m"/><path class="t_vp7-b6a"/></g>`,
		"fallback": "thesvg-color:workos-light",
	});
}

export default Component;
