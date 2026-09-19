import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/f-71bdcop.css';
import '../../css/p/pqby8lb2j.css';
import '../../css/g/gdtb-qb5o.css';
import '../../css/p/pmhiyvfve.css';
import '../../css/g/g-shhqb1n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="f-71bdcop"/><path class="pqby8lb2j"/><path class="gdtb-qb5o"/><path class="pmhiyvfve"/><path class="g-shhqb1n"/></g>`,
		"fallback": "circle-flags:wf",
	});
}

export default Component;
