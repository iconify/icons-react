import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d47xi2b9o.css';
import '../../css/y/y9o8qmpxw.css';
import '../../css/f/f7f3s988y.css';
import '../../css/m/m7g34abuh.css';
import '../../css/o/odxdb0onu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d47xi2b9o"/><path class="y9o8qmpxw"/><path class="f7f3s988y"/><path class="m7g34abuh"/><path class="odxdb0onu"/>`,
		"fallback": "formkit:yen",
	});
}

export default Component;
