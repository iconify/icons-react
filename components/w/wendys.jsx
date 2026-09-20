import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le0cgmbgy.css';
import '../../css/s/swqxefodk.css';
import '../../css/c/ci0zejzuq.css';

const viewBox = {"width":1230,"height":526};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le0cgmbgy"/><path class="swqxefodk"/><path class="ci0zejzuq"/>`,
		"fallback": "thesvg-color:wendys",
	});
}

export default Component;
