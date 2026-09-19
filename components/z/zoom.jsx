import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/d/dod3i1bsk.css';
import '../../css/m/mf1jdvbha.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZy0sTdUh"><g class="aql7dnt-u"><path class="dod3i1bsk"/><path class="mf1jdvbha"/></g></mask></defs><path mask="url(#SVGZy0sTdUh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:zoom",
	});
}

export default Component;
