import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gnpygbbki {
  fill: currentColor;
  d: path("M3.714 19.287q-.945-.945-.945-2.287t.944-2.286T6 13.769t2.286.944T9.232 17t-.944 2.286T6 20.232t-2.286-.945m12 0q-.945-.944-.945-2.286t.944-2.286T18 13.769t2.286.944t.945 2.287t-.945 2.286t-2.286.945t-2.286-.945m-6-10Q8.769 8.343 8.769 7t.944-2.286T12 3.769t2.286.945T15.232 7t-.944 2.286t-2.287.945t-2.286-.944");
}
</style><path class="gnpygbbki"/>`,
		"fallback": "material-symbols-light:workspaces",
	});
}

export default Component;
