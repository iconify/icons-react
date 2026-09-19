import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e_iwscbqa.css';
import '../../css/o/o452wi0jp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCIZk6d3F"><g class="aql7dnt-u"><circle class="e_iwscbqa"/><path class="o452wi0jp"/></g></mask></defs><path mask="url(#SVGCIZk6d3F)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:wrong-user",
	});
}

export default Component;
