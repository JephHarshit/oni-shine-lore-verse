
import Navbar from '../components/Navbar';

const Story = () => {
  const storyContent = `In Taisho-era Japan, kindhearted Tanjiro Kamado makes a living selling charcoal. But his peaceful life is shattered when a demon slaughters his entire family. His little sister Nezuko is the only survivor, but she has been transformed into a demon herself!

Though devastated by this grim reality, Tanjiro resolves to become a "demon slayer" so that he can turn his sister back into a human, and kill the demon that massacred his family.

The story follows Tanjiro as he joins the Demon Slayer Corps, an organization that has been secretly protecting humanity from demons for centuries. Along his journey, he meets fellow demon slayers like the cowardly yet loyal Zenitsu and the hot-blooded Inosuke, each with their own tragic backstories and reasons for fighting.

As Tanjiro grows stronger and learns new breathing techniques, he discovers that the demon who killed his family is connected to a much larger threat - Muzan Kibutsuji, the first and most powerful demon who has been spreading his curse for over a thousand years.

The Demon Slayer Corps is led by the Hashira, the nine strongest demon slayers, each specializing in different breathing styles derived from Sun Breathing, the original technique. These elite warriors include the Flame Hashira Kyojuro Rengoku, the Water Hashira Giyu Tomioka, and the Insect Hashira Shinobu Kocho, among others.

Throughout his journey, Tanjiro learns that not all demons are evil - some, like his sister Nezuko, retain their humanity despite their transformation. This realization shapes his compassionate approach to demon slaying, always seeking to understand his enemies rather than simply destroy them.

The story explores themes of family, determination, the cycle of hatred and revenge, and the power of compassion to break through even the darkest circumstances. As Tanjiro and his companions face increasingly powerful demons, they must confront not only external threats but also their own inner demons and traumatic pasts.

The ultimate goal remains constant: to find a way to turn Nezuko back into a human and to stop Muzan Kibutsuji before he can plunge the world into eternal darkness. But the path forward is fraught with danger, sacrifice, and heartbreak, testing the bonds of friendship and family that give our heroes the strength to continue fighting.`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">The Story of Demon Slayer</h1>
            <p className="text-xl text-muted-foreground">Discover the tale of Tanjiro Kamado</p>
          </div>

          {/* Scrollable Story Content */}
          <div className="bg-card border rounded-2xl p-8 shadow-lg">
            <div className="max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              <div className="prose prose-lg max-w-none">
                {storyContent.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 text-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
