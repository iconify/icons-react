import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6nfn3bmq.css';
import '../../css/d/d9itboj4b.css';
import '../../css/a/aqb2160dr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6nfn3bmq"/><path class="d9itboj4b"/><path class="aqb2160dr"/>`,
		"fallback": "icon-park:xingtu",
	});
}

export default Component;
