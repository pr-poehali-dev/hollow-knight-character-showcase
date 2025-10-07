import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const characters = [
  {
    id: 1,
    name: 'The Knight',
    role: 'Protagonist',
    description: 'Silent vessel created to contain the infection. Wields a nail and explores the depths of Hallownest.',
    location: 'Dirtmouth',
    type: 'character',
    icon: 'Sword',
    image: 'https://cdn.poehali.dev/files/3e6a19fb-5763-4335-bba3-64ad8264c003.jpg'
  },
  {
    id: 2,
    name: 'Hornet',
    role: 'Protector',
    description: 'Princess-protector of Hallownest. Daughter of the Pale King and Herrah the Beast.',
    location: 'Kingdom\'s Edge',
    type: 'character',
    icon: 'Zap',
    image: 'https://cdn.poehali.dev/files/f756e43a-b798-4560-8577-6fd64d47a4f8.jpg'
  },
  {
    id: 3,
    name: 'Quirrel',
    role: 'Scholar',
    description: 'A thoughtful wanderer exploring Hallownest. Once served Monomon the Teacher.',
    location: 'Various',
    type: 'character',
    icon: 'BookMarked',
    image: 'https://cdn.poehali.dev/files/2a974248-f9e0-4a54-81f4-4c565526f5c3.jpg'
  }
];

const bosses = [
  {
    id: 1,
    name: 'Hollow Knight',
    difficulty: 'Hard',
    description: 'The vessel chosen to seal the Radiance. Final guardian of the Temple of the Black Egg.',
    location: 'Temple of the Black Egg',
    type: 'boss',
    icon: 'Swords',
    image: 'https://cdn.poehali.dev/files/43adc076-69a0-43b9-a4bd-bb8e56312562.png'
  },
  {
    id: 2,
    name: 'The Radiance',
    difficulty: 'Extreme',
    description: 'Ancient god of light and dreams. Source of the infection plaguing Hallownest.',
    location: 'Dream Realm',
    type: 'boss',
    icon: 'Sun',
    image: 'https://cdn.poehali.dev/files/b3efda4f-01b8-41fc-aadf-dce4046fef3d.jpg'
  },
  {
    id: 3,
    name: 'Mantis Lords',
    difficulty: 'Medium',
    description: 'Three noble warriors who rule over the Mantis Tribe with honor and strength.',
    location: 'Mantis Village',
    type: 'boss',
    icon: 'Flame',
    image: 'https://cdn.poehali.dev/files/b3411d37-a9f3-4045-b1e3-ccf6dae17ecc.png'
  }
];

const loreEntries = [
  {
    id: 1,
    title: 'The Pale King',
    content: 'Once ruler of Hallownest, the Pale King brought civilization and sapience to the bugs through his pale light. In desperation to save his kingdom from the Radiance, he created vessels from void.',
    category: 'History'
  },
  {
    id: 2,
    title: 'The Infection',
    content: 'A plague of light and madness spread by the Radiance through dreams. It corrupts the minds of bugs, turning them into husks driven only by rage.',
    category: 'Plague'
  },
  {
    id: 3,
    title: 'Hallownest',
    content: 'A vast underground kingdom carved beneath the dying surface world. Once prosperous, now fallen to ruin and infection.',
    category: 'Kingdom'
  },
  {
    id: 4,
    title: 'The Void',
    content: 'An ancient power that exists beneath the Abyss. Neither light nor darkness, it represents emptiness and negation.',
    category: 'Power'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative">
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black pointer-events-none"></div>
      <nav className="border-b border-white/10 bg-black/80 backdrop-blur-md fixed w-full z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white text-glow tracking-[0.2em]">HALLOWNEST</h1>
            <div className="flex gap-8">
              {['home', 'characters', 'bosses', 'lore'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                    activeSection === section
                      ? 'text-white text-glow scale-110'
                      : 'text-white/70 hover:text-white hover:text-glow'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {activeSection === 'home' && (
          <section className="min-h-screen flex items-center justify-center px-4 animate-fade-in relative">
            <div className="text-center max-w-5xl relative z-10">
              <div className="mb-12 ornament-border py-8">
                <div className="flex justify-center items-center gap-4 mb-6">
                  <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-white"></div>
                  <Icon name="Crown" size={32} className="text-white animate-float" />
                  <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-white"></div>
                </div>
                <h2 className="text-7xl font-bold mb-4 text-white text-glow tracking-[0.2em]">
                  HOLLOW KNIGHT
                </h2>
                <div className="flex justify-center items-center gap-4 mt-6">
                  <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-white"></div>
                  <Icon name="Sword" size={24} className="text-white" />
                  <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-white"></div>
                </div>
              </div>
              <p className="text-lg text-white/80 mb-12 leading-relaxed tracking-wide max-w-2xl mx-auto">
                Beneath the fading town of Dirtmouth sleeps a kingdom of darkness and dreams
              </p>
              <div className="flex flex-col gap-6 items-center">
                <button
                  onClick={() => setActiveSection('characters')}
                  className="px-12 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold uppercase tracking-[0.15em] text-sm"
                >
                  ⚔ Characters ⚔
                </button>
                <button
                  onClick={() => setActiveSection('bosses')}
                  className="px-12 py-4 border-2 border-white/70 text-white/90 hover:border-white hover:text-white hover:bg-white/10 transition-all duration-300 uppercase tracking-[0.15em] text-sm"
                >
                  Bosses
                </button>
                <button
                  onClick={() => setActiveSection('lore')}
                  className="px-12 py-4 border-2 border-white/70 text-white/90 hover:border-white hover:text-white hover:bg-white/10 transition-all duration-300 uppercase tracking-[0.15em] text-sm"
                >
                  Lore
                </button>
              </div>
            </div>
            <div className="absolute bottom-10 right-10 text-white/50 text-xs tracking-wider">
              <p>team cherry</p>
            </div>
          </section>
        )}

        {activeSection === 'characters' && (
          <section className="container mx-auto px-4 py-16 animate-fade-in relative z-10">
            <h2 className="text-5xl font-bold mb-12 text-center text-white text-glow tracking-[0.2em]">Characters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {characters.map((char) => (
                <Card
                  key={char.id}
                  className="bg-[#1a1f2c] border-[#8B5CF6]/30 hover:border-[#8B5CF6] transition-all duration-300 hover:shadow-xl hover:shadow-[#8B5CF6]/20 overflow-hidden"
                >
                  <div className="flex flex-col">
                    <div className="h-64 bg-gradient-to-br from-black via-gray-900/50 to-black flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]"></div>
                      {char.image ? (
                        <img 
                          src={char.image} 
                          alt={char.name}
                          className="w-40 h-40 object-contain z-10 drop-shadow-2xl"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#805CF6] flex items-center justify-center shadow-2xl shadow-[#8B5CF6]/50 z-10">
                          <Icon name={char.icon} size={48} className="text-white" />
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white">{char.name}</h3>
                        <Badge className="bg-white/10 text-white border border-white/30">{char.role}</Badge>
                      </div>
                      <p className="text-white/70 mb-3 leading-relaxed">{char.description}</p>
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <Icon name="MapPin" size={16} />
                        <span>{char.location}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'bosses' && (
          <section className="container mx-auto px-4 py-16 animate-fade-in relative z-10">
            <h2 className="text-5xl font-bold mb-12 text-center text-white text-glow tracking-[0.2em]">Bosses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {bosses.map((boss) => (
                <Card
                  key={boss.id}
                  className="bg-black/50 border-white/20 hover:border-white transition-all duration-300 backdrop-blur-sm overflow-hidden"
                >
                  <div className="flex flex-col">
                    <div className="h-64 bg-gradient-to-br from-black via-gray-900/50 to-black flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]"></div>
                      {boss.image ? (
                        <img 
                          src={boss.image} 
                          alt={boss.name}
                          className="w-40 h-40 object-contain z-10 drop-shadow-2xl"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#805CF6] to-[#6E59A5] flex items-center justify-center shadow-2xl shadow-[#805CF6]/50 z-10">
                          <Icon name={boss.icon} size={48} className="text-white" />
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white">{boss.name}</h3>
                        <Badge
                          className={
                            boss.difficulty === 'Extreme'
                              ? 'bg-red-900/50 text-white border border-red-500/30'
                              : boss.difficulty === 'Hard'
                              ? 'bg-orange-900/50 text-white border border-orange-500/30'
                              : 'bg-yellow-900/50 text-white border border-yellow-500/30'
                          }
                        >
                          {boss.difficulty}
                        </Badge>
                      </div>
                      <p className="text-white/70 mb-3 leading-relaxed">{boss.description}</p>
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <Icon name="MapPin" size={16} />
                        <span>{boss.location}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'lore' && (
          <section className="container mx-auto px-4 py-16 animate-fade-in relative z-10">
            <h2 className="text-5xl font-bold mb-12 text-center text-white text-glow tracking-[0.2em]">Lore of Hallownest</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {loreEntries.map((entry) => (
                <Card
                  key={entry.id}
                  className="bg-black/50 border-white/20 hover:border-white transition-all duration-300 backdrop-blur-sm p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border border-white/30 flex items-center justify-center flex-shrink-0">
                      <Icon name="BookOpen" size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-white">{entry.title}</h3>
                        <Badge className="bg-white/10 text-white border border-white/30">
                          {entry.category}
                        </Badge>
                      </div>
                      <p className="text-white/70 leading-relaxed text-lg italic">{entry.content}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-white/10 mt-20 py-8 relative z-10">
        <div className="container mx-auto px-4 text-center text-white/50">
          <p className="text-sm tracking-wider">
            Hallownest Encyclopedia • Inspired by Hollow Knight by Team Cherry
          </p>
        </div>
      </footer>
    </div>
  );
}