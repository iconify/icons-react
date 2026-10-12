import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_olbwbfe.css';
import '../../css/a/ag5dtyruo.css';
import '../../css/r/rhyscc7ul.css';
import '../../css/c/c5wi2rbqh.css';
import '../../css/c/cpg4bq6cc.css';
import '../../css/l/ldoh9zbts.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_olbwbfe"/><path class="ag5dtyruo"/><path class="rhyscc7ul"/><path class="c5wi2rbqh"/><path class="cpg4bq6cc"/><path class="ldoh9zbts"/>`,
		"fallback": "material-icon-theme:zizmor",
	});
}

export default Component;
