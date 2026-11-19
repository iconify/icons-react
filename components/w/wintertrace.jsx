import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-w-40guh.css';
import '../../css/f/fr59-4bgr.css';
import '../../css/o/o2kdw8bhg.css';
import '../../css/j/jea0febxj.css';
import '../../css/p/p63dztbyc.css';
import '../../css/b/bvz2nrbts.css';
import '../../css/d/d55daeexs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="n-w-40guh"/><path class="fr59-4bgr"/><path class="o2kdw8bhg"/><path class="jea0febxj"/><circle class="p63dztbyc"/><circle class="bvz2nrbts"/><circle class="d55daeexs"/>`,
		"fallback": "selfhst:wintertrace",
	});
}

export default Component;
