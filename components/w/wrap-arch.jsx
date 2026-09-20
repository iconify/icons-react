import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/ypsz_k6lp.css';
import '../../css/b/b-9usgbzm.css';
import '../../css/q/qhvvzgbog.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ypsz_k6lp"/><path class="b-9usgbzm"/><path class="qhvvzgbog"/></g>`,
		"fallback": "streamline-plump-color:wrap-arch",
	});
}

export default Component;
