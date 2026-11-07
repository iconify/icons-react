import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmxdroxwq.css';
import '../../css/g/gsoiz-rxf.css';
import '../../css/c/cuyok2bgh.css';
import '../../css/k/k8q6v-b7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nmxdroxwq"/><path clip-rule="evenodd" class="gsoiz-rxf"/><path class="cuyok2bgh"/><path class="k8q6v-b7e"/>`,
		"fallback": "solar:widget-2-bold",
	});
}

export default Component;
